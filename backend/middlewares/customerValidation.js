const validateCustomerDetails = (req, res, next) => {
  const {customerName, customerPassword, customerContactInfo, customerEmail} =
    req.body;

  if (
    !customerName ||
    !customerPassword ||
    !customerContactInfo ||
    !customerEmail
  ) {
    return res.status(400).json({message: "All fields are required"});
  }

  // You can add additional validation logic here if needed

  // If all validation passes, move to the next middleware/route handler
  next();
};

module.exports = {validateCustomerDetails};
