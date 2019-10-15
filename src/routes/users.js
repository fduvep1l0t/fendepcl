const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/add', (req, res) => {
    res.render('users/add', { style: 'users.css'});
});

router.post('/add', async (req, res) =>{
    console.log("CONSOLELOG: post-method from users.js by plt");
    const {user_acc, user_pw} = req.body;
    const newUserData = {user_acc, user_pw};
    console.log(newUserData);
    
    await pool.query('INSERT INTO user_acc set ?', [newUserData]);

    res.send('CONSOLELOG: recibido from users.js by plt');
    //problema redireccionando luego de guardar un nuevo user.
    //console.log('CONSOLELOG: redirigiendo from users.js by plt');
    //res.redirect('/users');
});

router.get('/', async (req, res) => {
    const users = await pool.query('SELECT * FROM user_acc');

    //console.log(users);
    res.render('users/list', {users: users});
    console.log("CONSOLELOG: get-method from users.js by plt");
    //res.send('CONSOLELOG: recibido from users.js by plt');
});

router.get('/delete/:id_user', async (req, res) => {
    const { id_user } = req.params;
    await pool.query('DELETE FROM user_acc WHERE id_user = ?', [id_user]);
    console.log('CONSOLELOG: deleted from users.js by plt');
    res.redirect('/users');
});

router.get('/edit/:id_user', async (req, res) => {
    const { id_user } = req.params;
    console.log(id_user);
    const users = await pool.query('SELECT * FROM user_acc WHERE id_user = ?', [id_user]);
    res.render('users/edit', {user: users[0]});
    console.log('flag01');
});

router.post('/edit/:id_user', async (req, res) => {
    console.log('flag02');
    const { id_user } = req.params;
    const { user_acc, user_pw } = req.body;
    const newUserData = {
        user_acc, 
        user_pw
    };
    console.log('FUNCIONANDO HASTA AQUI1');
    console.log(newUserData);
    await pool.query('UPDATE user_acc set ? WHERE id_user = ?', [newUserData, id_user]);
    res.redirect('/users');
    res.send('CONSOLELOG: editado from users.js by plt')
});

//exportar como
module.exports = router;