const User = require('../models/user');


exports.getAllTasks = (req, res) => {
  User.find()
  .then(users_tasks=>{
      res.render('main/index', {
        title: 'Tasks',
        users_tasks: users_tasks
      });
  }).catch(err => {
    return  res.redirect("/errorpage")
  })
};

exports.getNewTask = (req, res) => {
  res.render('main/addTask', {
    title: 'Add new task'
  });
};

exports.postNewTask = (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const age = +req.body.age;
  const interest = req.body.interest;
  const subject = req.body.subject;
  const hours = +req.body.hours;
  const days = +req.body.days;
  const reason_of_task = req.body.reason_of_task;
  const resources = req.body.resources;
  const status = false
  
  const user = new User({
      firstName,
      lastName,
      age,
      interest,
      subject,hours,days,reason_of_task,resources,status
    })
    
 
  user.save().then(()=>{
      return res.redirect('/')
  }).catch(err=>{
    console.log(err);
    return res.redirect("/errorpage")
  })
} 

exports.postEditTask = (req, res, next) => {
  const id = req.body.userId;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const age = +req.body.age;
  const interest = req.body.interest;
  const subject = req.body.subject;
  const hours = +req.body.hours;
  const days = +req.body.days;
  const reason_of_task = req.body.reason_of_task;
  const resources = req.body.resources;
  const status = false

  User.findById(id)
    .then(user => {
      if (!user) {
        return res.redirect('/errorpage');
      }
      user.firstName = firstName;
      user.lastName = lastName;
      user.age = age;
      user.interest = interest;
      user.subject = subject;
      user.hours = hours;
      user.days = days;
      user.reason_of_task = reason_of_task;
      user.resources = resources;
      user.status = status;

      return user.save().then(result => {
        res.redirect('/');
      });
    })
    .catch(err => console.log(err));
};

 
exports.postDetail = (req, res, next) => {
  const id = req.body.user_task;
  User.find({_id:id})
  .then((user)=>{
    res.render('main/detail', {
      title: user[0].firstName,
      user: user
    });
  }).catch(err => {console.log(err)})
};

exports.getEditTask = (req, res, next) => {
  const id = req.params.userId;
  User.findById(id)
    .then(user => {
      if (!user) {
        return res.redirect('/');
      }
      res.render('main/editTask', {
        title: 'Edit Task',
        user: user
      });
    })
    .catch(err => {
       console.log(err)
    });
};

exports.deleteUser = (req, res)=>{
  const id = req.body.userId;
  User.findByIdAndRemove(id).then(()=>{
    return res.redirect("/");
  }).catch(err=>console.log(err))
}

