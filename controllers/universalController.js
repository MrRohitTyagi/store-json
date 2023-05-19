const universal = require("../modals/schemalessModel");

exports.fetchData = async (req, res) => {
  try {
    const { key } = req.params;
    const data = await universal.findOne({ key });
    res
      .status(200)
      .send({ response: data?.data || {}, success: true, key: data?.key });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

exports.updateData = async (req, res) => {
  try {
    const { data = {}, key, type = "CREATE" } = req.body;
    console.log({ data, key, type });
    if (!key) {
      res.status(400).send({ success: false, message: "Key is Required" });
      return;
    }
    if (type === "UPDATE") {
      const key_Exists = await universal.findOne({ key });
      if (!key_Exists) {
        res.status(400).json({ response: "Key does not exists" });
        return;
      }
      const updatedData = await universal.findOneAndUpdate(
        { key },
        { $set: { data, key } },
        { new: true }
      );
      res.status(200).json({
        response: updatedData?.data,
        success: true,
        key: updatedData?.key,
      });
      return;
    }
    const dataSaved = await universal.create({ data, key });
    res
      .status(200)
      .json({ response: dataSaved.data, success: true, key: dataSaved.key });
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json({ error: "Key already exists please try another" });
    } else {
      res
        .status(500)
        .json({ error: "An error occurred while saving the data" });
    }

    console.log(err.code);
  }
};

exports.deleteData = async (req, res) => {
  try {
    const { key } = req.params;
    const data = await universal.findOneAndDelete({ key });
    console.log("%c data ", "color: green;border:1px solid green", data);
    if (data) {
      res
        .status(200)
        .json({ success: true, response: "Data  deleted successfully" });
    } else {
      res.status(400).json({
        success: false,
        message: "Unable to delete Data",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
