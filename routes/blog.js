exports.show = function (req, res) {
  res.render("blog", {
    data : [
      {
        author: 'General Typographer',
        title: 'Next Generation Blog Revolution',
        body: 'The begining of a real blog is recognized by the length of the first sentence. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        blog_snip: 'Adding that extra thing in the Blog Revolution. Predifining the way we blog and the way we interact with the internet. General Typographer in collaboration with Fifi  and the Delft Media Empire are proud to annouce the release of the next genetion blogger platform, Next Generation Blog Revolution (NGBRev). This is the platform for everyone who creates online content and create a story about the content. ',
        date: '22 December 2017'
      },
      {
        author: 'Lee Dar',
        title: 'Progressive Web App Design',
        blog_snip: 'You should have noticed by now that all I ever write about are these few things that filled my mind since I began to practice reading..and blogging. But the main thing here really, is to introduce something different from all these other things. That is so because it has an element that is common to all these other stuff plus some other extra free and cool stuff it comes with. Making web apps. What all these things to me have in common is how they make me feel when I do them. They strike a unique chord within me and the harmonous feelings they evoke, make me feel at peace.  ',
        body: 'The begining of the 2nd real blog is recognized by the length of the first sentence. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: '28 December 2017'
      },
      {
        author: 'Blog 301 @noon',
        title: 'Blogs and Podcasts of a Developer',
        blog_snip: 'Talk about establishing a rad way we interact with the internet. The idea behind this is that creators should blog or podcast more frequently about their creations and inventions.',
        body: 'The begining of the 3rd real blog is recognized by the length of the first sentence. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: '28 December 2017'
      }
    ]
  });
};

// When I can write to the this file to append user added bloggs
exports.showAdd = function(req, res){
	res.render('add_blog');
}
