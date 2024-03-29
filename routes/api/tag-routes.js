const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags and include associated Product data
router.get('/', (req, res) => {
  Tag.findAll({
    include: [{ model: Product }],
  })
  .then((tagData) => res.status(200).json(tagData))
  .catch((err) => res.status(500).json(err));
});

// find a single tag by its `id` and include associated Product data
router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id, {
    include: [{ model: Product }],
  })
  .then((tagData) => {
    if (!tagData) {
      res.status(404).json({ message: 'Tag not found' });
      return;
    }
    res.status(200).json(tagData);
  })
  .catch((err) => res.status(500).json(err));
});

// create a new tag
router.post('/', (req, res) => {
  Tag.create(req.body.tag_name)
  .then((tagData) => res.status(200).json(tagData))
  .catch((err) => res.status(400).json(err));
});

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: { id: req.params.id, },
  })
  .then((tagData) => {
    if (!tagData[0] === 0) {
      res.status(404).json({ message: 'Tag not found' });
      return;
    }
    res.status(200).json({ message: 'Tag updated' });
  })
  .catch((err) => res.status(500).json(err));
});

// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: { id: req.params.id, },
  })
  .then((tagData) => {
    if (!tagData) {
      res.status(404).json({ message: 'Tag not found' });
      return;
    }
    res.status(200).json({ message: 'Tag deleted' });
  })
  .catch((err) => res.status(500).json(err));
});

module.exports = router;
