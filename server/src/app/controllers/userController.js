
const Users = require("../models/User")
const dotenv = require("dotenv")
dotenv.config()

const userController = {
  getUserInfo: async (req, res) => {
    try {
      const user = await Users.findById(req.user.id).select("-password");

      res
        .status(200)
        .json({ success: "Lấy thông tin người dùng thành công", data: user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllUser: async (req, res) => {
    try {
      const users = await Users.find().select("-password");
      res
        .status(200)
        .json({
          success: "Lấy thông tin tất cả người dùng thành công",
          data: users,
        });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      const { username, avatar } = req.body;
      await Users.findOneAndUpdate({ _id: req.user.id }, { username, avatar });
      res
        .status(200)
        .json({ success: "Cập nhật thông tin người dùng thành công" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateUserPermission: async (req, res) => {
    try {
      const { role } = req.body;
      // 9999: admin, 1: employee, 0: nor
      await Users.findOneAndUpdate({ _id: req.params.id }, { role });
      res.status(200).json({ success: "Cập nhật quyền người dùng thành công" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  

  deleteUser: async (req, res) => {
    try {
      await Users.findByIdAndDelete(req.params.id);
      res.status(200).json({ success: "Xóa tài khoản người dùng thành công" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  addToCart: async (req, res) => {
    try {
      
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateCartItem: async (req, res) => {
    try {
      
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
   deleteCartItem: async (req, res) => {
    try {
      
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
  }
};

module.exports = userController