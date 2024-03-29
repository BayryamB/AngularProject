const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3030;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/Angular-Project", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

app.use(cors());

// Define User schema
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  email: String,
});
const User = mongoose.model("User", userSchema);

// Define booking schema
const bookingSchema = new mongoose.Schema({
  // Define properties of a booking record
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: Date,
  location: {
    country: String,
    city: String,
  },
  photos: [String],
  cover: String,
  description: String,
  highlights: [String],
  price: Number,
  options: {
    wifi: Boolean,
    parking: Boolean,
    breakfast: Boolean,
    pets: Boolean,
    smoking: Boolean,
  },

  // Add more properties as needed
});

// Define rent schema
const rentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to the user who rented
  date: { type: Date, default: Date.now }, // Date of the rent (default to current date)
  location: {
    country: String,
    city: String,
  },
  photos: [String],
  cover: String,
  description: String,
  highlights: [String],
  price: Number,
  options: {
    wifi: Boolean,
    parking: Boolean,
    breakfast: Boolean,
    pets: Boolean,
    smoking: Boolean,
  },
  // Add more properties as needed
});
const Rent = mongoose.model("Rents", rentSchema);

const Booking = mongoose.model("Booking", bookingSchema);

// Middleware to parse JSON
app.use(express.json());

// Register endpoint
app.post("/api/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      username: req.body.username,
      password: hashedPassword,
      email: req.body.email,
    });
    await user.save();
    res
      .status(201)
      .json({ message: "User registered successfully", userId: user._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login endpoint
app.post("/api/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(401).json({ message: "Authentication failed" });
    }
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordMatch) {
      return res.status(401).json({ message: "Authentication failed" });
    }
    const token = jwt.sign({ username: user.username }, "your_secret_key", {
      expiresIn: "1h",
    });
    res.status(200).json({ token: token, userId: user._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get user by ID
app.get("/api/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    // Find the user by ID in the database
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // If user found, send it in the response
    res.json(user);
  } catch (error) {
    // If there's an error, send an error response
    res.status(500).json({ error: error.message });
  }
});

// Update user by ID
app.put("/api/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const updateData = req.body;

    // Find the user by ID and update it in the database
    const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // If user is updated successfully, send it in the response
    res.json(updatedUser);
  } catch (error) {
    // If there's an error, send an error response
    res.status(500).json({ error: error.message });
  }
});

// Add booking endpoint
app.post("/api/bookings", async (req, res) => {
  try {
    // Create a new booking record
    const booking = new Booking({
      userId: req.body.userId,
      date: req.body.date,
      location: req.body.location,
      photos: req.body.photos,
      cover: req.body.cover,
      description: req.body.description,
      highlights: req.body.highlights,
      price: req.body.price,
      options: req.body.options,
      // Add more properties as needed
    });

    // Save the booking record to the database
    await booking.save();

    // Send a successful response
    res.status(201).json({ message: "Booking created successfully" });
  } catch (error) {
    // Handle any errors
    res.status(500).json({ error: error.message });
  }
});

// Get all bookings endpoint
app.get("/api/bookings", async (req, res) => {
  try {
    // Retrieve all booking records from the database
    const bookings = await Booking.find();

    // Send the booking records as a response
    res.status(200).json(bookings);
  } catch (error) {
    // Handle any errors
    res.status(500).json({ error: error.message });
  }
});
// Get 5 most recent bookings
app.get("/api/bookings/recent", async (req, res) => {
  try {
    const recentThemes = await Booking.find().sort({ createdAt: -1 }).limit(4);
    res.status(200).json(recentBookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Define a route to retrieve a specific booking by ID
app.get("/api/bookings/:id", async (req, res) => {
  try {
    // Retrieve the booking with the specified ID from the database
    const booking = await Booking.findById(req.params.id);

    // Check if the booking exists
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // Send the booking as a response
    res.status(200).json(booking);
  } catch (error) {
    // Handle any errors
    res.status(500).json({ error: error.message });
  }
});

// Route handlers
// Get all rents
app.get("/api/rents", async (req, res) => {
  try {
    const rents = await Rent.find();
    res.status(200).json(rents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single rent by ID
app.get("/api/rents/:id", async (req, res) => {
  try {
    const rent = await Rent.findById(req.params.id);
    if (!rent) {
      return res.status(404).json({ message: "Rent not found" });
    }
    res.status(200).json(rent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new rent
app.post("/api/rents", async (req, res) => {
  try {
    const rent = new Rent(req.body);
    await rent.save();
    res.status(201).json(rent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an existing rent
app.put("/api/rents/:id", async (req, res) => {
  try {
    const rent = await Rent.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!rent) {
      return res.status(404).json({ message: "Rent not found" });
    }
    res.status(200).json(rent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a rent
app.delete("/api/rents/:id", async (req, res) => {
  try {
    const rent = await Rent.findByIdAndDelete(req.params.id);
    if (!rent) {
      return res.status(404).json({ message: "Rent not found" });
    }
    res.status(204).end(); // No content
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Define a route to retrieve all users
app.get("/api/users", async (req, res) => {
  try {
    // Retrieve all users from the database
    const users = await User.find();

    // Send the users as a response
    res.status(200).json(users);
  } catch (error) {
    // Handle any errors
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
