const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories and include associated Products
router.get('/', (req, res) => {
  Category.findAll({
    include: [{ model: Product }],
  })
    .then((categoryData) => res.status(200).json(categoryData))
    .catch((err) => res.status(500).json(err));
});


// find one category by its `id` value and include associated Products
router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id, {
    include: [{ model: Product }],
  })
    .then((categoryData) => {
      if (!categoryData) {
        res.status(404).json({ message: 'Category not found' });
        return;
      } 
      res.status(200).json(categoryData);
    })
    .catch((err) => res.status(500).json(err));
  });


// create a new category
router.post('/', async (req, res) => {
  Category.create({
    category_name: req.body.category_name,
  })
  .then((categoryData) => res.status(200).json(categoryData))
  .catch((err) => res.status(400).json(err));
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: { id: req.params.id, },
  })
  .then((categoryData) => {
    if (!categoryData[0] === 0) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }
    res.status(200).json({ message: 'Category updated' });
  })
  .catch((err) => res.status(500).json(err));
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: { id: req.params.id, },
  })
  .then((categoryData) => {
    if (!categoryData) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }
    res.status(200).json({ message: 'Category deleted' });
  })
  .catch((err) => res.status(500).json(err));
});
  

module.exports = router;
