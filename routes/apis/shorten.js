const express = require("express");
const config = require("config");
const shortid = require("shortid");
const uniqid = require("uniqid");

const router = express.Router();

const URL = require("../../models/urlModel");

router.post("/", async (req, res) => {
  const longUrl = req.body.longUrl;
  const hostName = config.get("hostName");

  const urlHash = shortid.generate();

  try {
    // const url = URL.findOne({ longUrl });
    const shortUrl = hostName + "/" + urlHash;
    const urlEntry = await URL.create({
      longUrl,
      shortUrl,
      urlHash,
    });

    urlEntry.save();
    res.status(201).json({
      status: "success",
      data: {
        data: urlEntry,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error occured",
    });
  }
});

module.exports = router;
