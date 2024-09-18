new Vue({
    el: '#app',
    data: {
        boxes: [
            { title: 'Free Speech & Individual Liberty', content: 'Content for box 1.', expanded: false },
            { title: 'Health & Wellbeing', content: 'Content for box 2.', expanded: false },
            { title: 'Supporting Small Business', content: 'Content for box 3.', expanded: false },
            { title: 'Families, Jobs & Homes', content: 'Content for box 4.', expanded: false },
            { title: 'Fishing & Outdoors', content: 'Content for box 5.', expanded: false },
            { title: 'Youth, Justice & Parks', content: 'Content for box 6.', expanded: false },
            { title: 'Community Engagement', content: 'Content for box 7.', expanded: false },
            { title: 'Education & Choice', content: 'Content for box 8.', expanded: false },
            { title: 'Less Surveillance & Data Collection', content: 'Content for box 9.', expanded: false },
            { title: 'Lower Permit Costs & Taxes', content: 'Content for box 10.', expanded: false },
        ]
    },
    methods: {
        toggleExpand(index) {
            this.boxes[index].expanded = !this.boxes[index].expanded;
        }
    }
});