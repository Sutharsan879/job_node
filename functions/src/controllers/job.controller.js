export const postJob = async (req, res) => {
  return res.json({ success: true, message: "Job posted" });
};

export const applyJob = async (req, res) => {
  return res.json({ success: true, message: "Job applied" });
};

export const approveSeeker = async (req, res) => {
  return res.json({ success: true, message: "Seeker approved" });
};

export const completeJob = async (req, res) => {
  return res.json({ success: true, message: "Job completed" });
};
