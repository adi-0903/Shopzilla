const express = require("express")
const User = require("../models/User")
const auth = require("../middleware/auth")
const admin = require("../middleware/admin")
const { body, validationResult } = require("express-validator")

const router = express.Router()

// @route   PUT /api/users/address
// @desc    Add or update user address
// @access  Private
router.put(
  "/address",
  [
    auth,
    body("fullName").trim().isLength({ min: 2 }).withMessage("Full name is required"),
    body("phone").isMobilePhone().withMessage("Valid phone number is required"),
    body("address").trim().isLength({ min: 5 }).withMessage("Address is required"),
    body("city").trim().isLength({ min: 2 }).withMessage("City is required"),
    body("state").trim().isLength({ min: 2 }).withMessage("State is required"),
    body("pincode").isLength({ min: 6, max: 6 }).withMessage("Valid pincode is required"),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: errors.array(),
        })
      }

      const { fullName, phone, address, city, state, pincode, type = "home", isDefault = false } = req.body

      const user = await User.findById(req.user.id)

      // If this is set as default, make all other addresses non-default
      if (isDefault) {
        user.addresses.forEach((addr) => {
          addr.isDefault = false
        })
      }

      // If this is the first address, make it default
      if (user.addresses.length === 0) {
        const isDefault = true // Changed const to let
      }

      user.addresses.push({
        fullName,
        phone,
        address,
        city,
        state,
        pincode,
        type,
        isDefault,
      })

      await user.save()

      res.json({
        success: true,
        message: "Address added successfully",
        addresses: user.addresses,
      })
    } catch (error) {
      console.error("Add address error:", error)
      res.status(500).json({
        success: false,
        message: "Server error",
      })
    }
  },
)

// @route   PUT /api/users/address/:addressId
// @desc    Update user address
// @access  Private
router.put("/address/:addressId", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
    const address = user.addresses.id(req.params.addressId)

    if (!address) {
      return res.status(404).json({
        success: false,
        message: "Address not found",
      })
    }

    const { fullName, phone, address: addr, city, state, pincode, type, isDefault } = req.body

    // If this is set as default, make all other addresses non-default
    if (isDefault) {
      user.addresses.forEach((a) => {
        a.isDefault = false
      })
    }

    address.fullName = fullName || address.fullName
    address.phone = phone || address.phone
    address.address = addr || address.address
    address.city = city || address.city
    address.state = state || address.state
    address.pincode = pincode || address.pincode
    address.type = type || address.type
    address.isDefault = isDefault !== undefined ? isDefault : address.isDefault

    await user.save()

    res.json({
      success: true,
      message: "Address updated successfully",
      addresses: user.addresses,
    })
  } catch (error) {
    console.error("Update address error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

// @route   DELETE /api/users/address/:addressId
// @desc    Delete user address
// @access  Private
router.delete("/address/:addressId", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
    const address = user.addresses.id(req.params.addressId)

    if (!address) {
      return res.status(404).json({
        success: false,
        message: "Address not found",
      })
    }

    const wasDefault = address.isDefault
    user.addresses.pull(req.params.addressId)

    // If deleted address was default and there are other addresses, make the first one default
    if (wasDefault && user.addresses.length > 0) {
      user.addresses[0].isDefault = true
    }

    await user.save()

    res.json({
      success: true,
      message: "Address deleted successfully",
      addresses: user.addresses,
    })
  } catch (error) {
    console.error("Delete address error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

// @route   GET /api/users/admin/all
// @desc    Get all users (Admin only)
// @access  Private/Admin
router.get("/admin/all", [auth, admin], async (req, res) => {
  try {
    const { page = 1, limit = 20, search } = req.query

    const query = {}
    if (search) {
      query.$or = [{ name: new RegExp(search, "i") }, { email: new RegExp(search, "i") }]
    }

    const users = await User.find(query)
      .select("-password")
      .sort({ createdAt: -1 })
      .limit(Number(limit)) // Converted limit to Number
      .skip((Number(page) - 1) * Number(limit)) // Converted page to Number

    const total = await User.countDocuments(query)

    res.json({
      success: true,
      count: users.length,
      total,
      totalPages: Math.ceil(total / Number(limit)), // Converted limit to Number
      currentPage: Number(page),
      users,
    })
  } catch (error) {
    console.error("Get all users error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

// @route   PUT /api/users/admin/:id/role
// @desc    Update user role (Admin only)
// @access  Private/Admin
router.put("/admin/:id/role", [auth, admin], async (req, res) => {
  try {
    const { role } = req.body

    if (!["user", "admin"].includes(role)) {
      return res.status(400).json({
        success: false,
        message: "Invalid role",
      })
    }

    const user = await User.findByIdAndUpdate(req.params.id, { role }, { new: true, runValidators: true }).select(
      "-password",
    )

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      })
    }

    res.json({
      success: true,
      message: "User role updated successfully",
      user,
    })
  } catch (error) {
    console.error("Update user role error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
})

module.exports = router
