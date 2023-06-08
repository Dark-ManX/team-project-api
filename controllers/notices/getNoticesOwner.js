const { Notices } = require("../../models/schemasNotices");
const { RequestError } = require("../../helpers");

const getNoticesOwn = async (req, res) => {
  const { _id: owner } = req.user;

  const { page = 1, limit = 8 } = req.query;
  const skip = (page - 1) * limit;
  const results = await Notices.find({ owner }, "", {
    skip,
    limit,
  }).populate("owner", ["email", "phone"]);
  if (!results) {
    throw RequestError(404, `Not found owner notice `);
  }
  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      notices: results,
    },
  });
};
module.exports = getNoticesOwn;
