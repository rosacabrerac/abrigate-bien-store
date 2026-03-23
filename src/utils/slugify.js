export const slugify = (itemName) => {
  return itemName
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replaceAll(" ", "-")
    .replace(/[^\w-]/g, "")
    .replace(/-+/g, "")
    .replace(/^-+|-+$/g, "");
};