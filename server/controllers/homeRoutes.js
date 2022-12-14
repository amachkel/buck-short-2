const router = require('express').Router();
const { User, Post, Comment } = require('../models');
// const withAuth = require('../src/utils/auth');
// pages: homepage, login(BsAdmin), sign up(BsAdmin), post, post/:id, contact,
//        events, reviews, store

// not logged in, you can only see homepage and login page. When you click posts, you can see content, but can't comment.
// Homepage
router.get('/', async (req, res) => {
  try {
    res.render('home');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/posts', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User, attributes: ['name'] }],
    });
    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('posts', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//post/:id supposed to show blog post, content, and comments; can add comment if signed in. input box and submit button.
router.get('/posts/:id', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ['name'] },

        {
          model: Comment,
          attributes: ['id', 'content', 'post_id', 'date_created'],
        },
      ],
    });
    // const commentData = await Comment.findAll();
    const post = postData.get({ plain: true });
    // const comments = commentData.get({ plain: true });
    console.log(postData);
    res.render('post', {
      ...post,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// // Use withAuth middleware to prevent access to route
// // Dashboard
// router.get('/dashboard', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Post }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('dashboard', {
//       ...user,
//       logged_in: true,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Login page
// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/dashboard');
//     return;
//   }

//   res.render('login');
// });

// // Signup page
// router.get('/signup', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/dashboard');
//     return;
//   }

//   res.render('signup');
// });

// // Dashboard shows button to create new, and lists personal blog posts. When clicked, taken to /edit/:id
// // New post: title and content inputs w/ create button
// router.get('/new', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//     });

//     const user = userData.get({ plain: true });

//     res.render('new', {
//       ...user,
//       logged_in: true,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // edit/:id
// router.get('/edit/:id', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const postData = await Post.findByPk(req.params.id, {
//       include: [{ model: User }],
//     });

//     const post = postData.get({ plain: true });
//     res.render('edit', {
//       ...post,
//       logged_in: true,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
