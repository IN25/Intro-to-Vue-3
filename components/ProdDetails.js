app.component("prod-details", {
    props: {
        details
    },
    template:
    /* html */
    ` 
    <ul>
        <li v-for="detail in details">{{ detail }}</li>
    </ul>
    `
})
script