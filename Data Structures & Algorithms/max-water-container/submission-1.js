class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let s = 0;
        let e = heights.length - 1;
        let max = 0;

        for(let i = 0; i < heights.length; i++) {
            let higher = heights[s] < heights[e] ? e : s;
            let area = (heights[higher] - Math.abs(heights[e] - heights[s])) * (e - s);
            if(area > max) {
                max = area;
            }
            higher === s ? e-- : s++;
        }

        return max;
    }
}
