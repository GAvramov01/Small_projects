// Need to initialise all counters. 
// After that set the count from '0'.
// Get atribute and updating data from 'data-target'.
// After that make sure tha c number is uppering, counting with milliseconds.

const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 400

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        }
    }
    updateCounter()
})