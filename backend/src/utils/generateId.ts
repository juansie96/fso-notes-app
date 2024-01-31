type Item = Record<string, unknown> & { id: number };

const generateId = (items: Item[]) => {
  const maxId = items.length > 0 ? Math.max(...items.map((n) => n.id)) : 0;
  return maxId + 1;
};

export default generateId;
