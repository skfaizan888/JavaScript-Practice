//method -> obj
//function -> global (window,global)

function Circle(radiuss) {
    this.radius = radiuss;    //radius:4
    this.pi = 3.14;    // pi: 3.14
    this.area = function () {
        return this.pi * this.radius * this.radius;
    }
}
const result = new Circle(4);
console.log(result.area());

//Second Example
const movies = {
    title: "abc",
    tags: [1, 4, 7, 5],
    showMovie() {
        this.tags.forEach(function (element) {
            console.log(element, this.title);
        }.bind(this))

    }
}
movies.showMovie();

const video = {
    title: "AB",
    fun: [2, 4, 5, 6, 7],
    showVideo() {
        this.fun.forEach(function (data) {
            console.log(data, this.title)
        }, this)
    }
}
video.showVideo();