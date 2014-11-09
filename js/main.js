jQuery(function ($, undefined) {
  $(".terminal").terminal(function(command, term) {
    if (command !== '') {
      var message;
      if (command.match(/help/)) {
        message = "Currently supported:<br />help<br />edu<br />jobs<br />whoami"
      } else if (command.match(/whoami/)) {
        message = "I am a freelance web developer from Columbus, Ohio. Most of my work is in Ruby on Rails, but I like to try whatever new technology catches my attention. Additionally, I am pursuing a degree in Computer Science and Engineering at The Ohio State University. If you'd like to see some of my work, I recommend checking out <a href=\"https://github.com/j3rn\">my Github page</a>.";
      } else if (command.match(/jobs/)) {
        message = "Web Developer at CSTW at OSU (September, 2012 - March, 2013)<br />While at this position, I worked on developing and maintaining a fork of the phpScheduleIt project. This included writing responsive pages, updating the project to work with the latest version of PHP, using Git version control, and deploying code onto a CentOS server.<br /><br />";
        message += "Web Developer and Project Manager at Park Bench Digital (October 2013 - October 2014)<br />At this position, I worked with Ruby on Rails to develop web applications for clients. I collaborated with my distributed team using Git version control, used Heroku for deployment, and researched and implimented a variety of Ruby Gems.";
      } else if (command.match(/edu/)) {
        message = "I am pursuing a degree in Computer Science and Engineering at the Ohio State University. My coursework includes foundations of computer science, software development, systems, and electrical and computer engineering, as well as physics, calculus, and general engineering classes.";
      } else {
        message = "t3rm: command not found: " + command;
      }

      term.echo(message, {raw: true});
    } else {
      term.echo('');
    }
  }, {
    greetings: "       _______ ____  _   __\n      / /__  // __ \\/ | / /\n __  / / /_ </ /_/ /  |/ / \n/ /_/ /___/ / _, _/ /|  /  \n\\____//____/_/ |_/_/ |_/   \n\nWelcome to T3RM\n\nNew here? Try \"help\"",
      name: "j3rn_term",
      prompt: "t3rm> "});
});
