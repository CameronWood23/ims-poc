const express = require("express")
const router = express.Router()
const protect = require("../middleware/authMiddleware")
const {
  createProduct,
  getAllProducts,
  getProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController")
const { upload } = require("../utils/fileUpload")

router.post("/", protect, upload.single("image"), createProduct)
router.get("/", protect, getAllProducts)
router.get("/:id", protect, getProduct)
router.delete("/:id", protect, deleteProduct)
router.patch("/:id", protect, upload.single("image"), updateProduct)

module.exports = router
