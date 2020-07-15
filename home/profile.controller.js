class ProfileController {
  constructor($scope) {
    this.peopleData = [
      {
        "name": "Andrew Amernante",
        "rating": 3,
        "img": "https://www.fillmurray.com/284/196",
        "Description": "Gluten­free cray cardigan vegan. Lumbersexual pork belly blog, fanny pack put a bird on it selvage",
        "Likes": [
          "Dogs",
          "Long walks on the beach",
          "Chopin",
          "Tacos"
        ],
        "Dislikes": [
          "Birds",
          "Red things",
          "Danish food",
          "Dead Batteries"
        ]
      },
      {
        "name": "Frank Wang",
        "rating": 5,
        "img": "https://www.fillmurray.com/140/200",
        "Description": "Before errors, mails were only pressures. This is not to discredit the idea that a magic is the prose of anelizabeth. This could be, or perhaps some posit the outmost coil to be less than dedal. Some assert that those treatments are nothing more than carp.",
        "Likes": [
          "Frank",
          "Manchester United",
          "Football",
          "Programming"
        ],
        "Dislikes": [
          "Dogs",
          "Long walks on the beach",
          "Chopin",
          "Tacos"
        ]
      },
      {
        "name": "Sissi Chen",
        "rating": 5,
        "img": "https://www.fillmurray.com/300/200",
        "Description": "Aaah! Natural light! Get it off me! Get it off me! Oh, loneliness and cheeseburgers are a dangerous mix. D'oh. Here's to alcohol, the cause of all life's problems.",
        "Likes": [
          "Cats",
          "the beach",
          "Chopin",
          "Blue things"
        ],
        "Dislikes": [
          "Birds"
        ]
      },
      {
        "name": "Diego Garcia",
        "rating": 2,
        "img": "https://www.fillmurray.com/200/200",
        "Description": "Facts are meaningless. You could use facts to prove anything that's even remotely true! I prefer a vehicle that doesn't hurt Mother Earth. It's a go­cart, powered by my ownsense of self­satisfaction. You don't win friends with salad.",
        "Likes": [
          "Talking Spanish",
          "Spanish food",
          "Spanish things",
          "Football"
        ],
        "Dislikes": [
          "Not talking spanish",
          "Chopin"
        ]
      },
      {
        "name": "Fuad Rashid",
        "rating": 4,
        "img": "https://www.fillmurray.com/140/100",
        "Description": "Gluten­free cray cardigan vegan. Lumbersexual pork belly blog, fanny pack put a bird on it selvage",
        "Likes": [
          "Dogs",
          "Long walks on the beach",
          "Chopin",
          "Tacos"
        ],
        "Dislikes": [
          "Birds",
          "Red things",
          "Danish food",
          "Dead Batteries"
        ]
      }
    ];
  }

  showUserDetails = (user) => {
    this.displayUserDetails = true;
    this.userDetails = user;
    this.interests = [];
    this.ratingWidth = ((user.rating / 5) * 100);
    user.Likes.forEach((item, index) => {
      var obj = {};
      obj['like'] = item;
      obj['dislike'] = user.Dislikes[index] ? user.Dislikes[index] : '';
      if (obj) {
        this.interests.push(obj);
      }
    });
  };
}

export default ProfileController;