/**
 * On a 2D plane, there are n points given as an array points where points[i] = [xi, yi].
 * You need to visit all the points in the same order. You can move one unit in either direction
 * (left, right, up, down, or diagonally) in one second.
 *
 * Return the minimum time in seconds to visit all the points.
 *
 * Example 1:
 * Input: points = [[1,1],[3,4],[-1,0]]
 * Output: 7
 * Explanation:
 * From (1,1) to (3,4) takes max(3-1, 4-1) = 3 seconds.
 * From (3,4) to (-1,0) takes max(3-(-1), 4-0) = 4 seconds.
 * Total time = 3 + 4 = 7.
 *
 * Example 2:
 * Input: points = [[3,2],[-2,2]]
 * Output: 5
 *
 * Constraints:
 * 1 <= points.length <= 100
 * points[i].length == 2
 * -1000 <= points[i][0], points[i][1] <= 1000
 */

var minTimeToVisitAllPoints = function (points) {
    var time = 0;
    let [x1, y1] = points[0];
    for (let i = 1; i < points.length; i++) {
        let [x2, y2] = points[i];
        time += Math.max(Math.abs(y2 - y1), Math.abs(x2 - x1));
        x1 = x2;
        y1 = y2;
    }
    return time;
};

// Test case
console.log(
    minTimeToVisitAllPoints([
        [1, 1],
        [3, 4],
        [-1, 0],
    ]),
); // 7

