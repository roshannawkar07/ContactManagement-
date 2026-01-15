const getContacts = (req, res) => {
  res.status(200).json({ message: "Contacts retrieved successfully" });
};

const createContact = (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are required");
  }

  res.status(200).json({ message: "Contact created successfully" });
};

const getContactById = (req, res) => {
  res.status(200).json({
    message: `Contact retrieved successfully with id ${req.params.id}`,
  });
};

const updateContactById = (req, res) => {
  res.status(200).json({
    message: `Contact updated successfully with id ${req.params.id}`,
  });
};

const deleteContactById = (req, res) => {
  res.status(200).json({
    message: `Contact deleted successfully with id ${req.params.id}`,
  });
};

module.exports = {
  getContacts,
  createContact,
  getContactById,
  updateContactById,
  deleteContactById,
};
