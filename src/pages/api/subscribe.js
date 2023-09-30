import axios from "axios";

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const response = await axios.post(
        "https://us-central1-wildflow-demo.cloudfunctions.net/addAudienceSubscriber",
        req.body
      );
      return res.status(200).json(response.data);
    } catch (error) {
      return res
        .status(error.response?.status || 500)
        .json(error.response?.data || {});
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};
