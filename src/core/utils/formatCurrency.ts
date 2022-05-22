export const formatCurrency = (value: number) => {
  const formater = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const newValue = formater.format(value).split(".")[0].replace("$", "");

  return newValue;
};
