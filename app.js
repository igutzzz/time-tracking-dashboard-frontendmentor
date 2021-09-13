//Data
const data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

//Hours
let hours = document.querySelectorAll('.hours');
let previous = document.querySelectorAll('.previous-hours')
//Buttons
let buttons = document.querySelectorAll('#period h3')

//Main Hours
for (let i = 0; i < buttons.length; i++) {
  const element = buttons[i];
  element.addEventListener("click", e=> {
    let periodo = Array.from(buttons).indexOf(element);
    if (periodo === 0) {
      for (let i = 0; i < hours.length; i++) {
        const element = hours[i];
        element.textContent = data[i].timeframes.daily.current + "hrs"
      }
      
      for (let i = 0; i < previous.length; i++) {
        const element = previous[i];
        element.textContent = "Previous Day - " + data[i].timeframes.daily.previous + "hrs"
      }
    } else if (periodo === 1) {
      for (let i = 0; i < hours.length; i++) {
        const element = hours[i];
        element.textContent = data[i].timeframes.weekly.current + "hrs"
      }

      for (let i = 0; i < previous.length; i++) {
        const element = previous[i];
        element.textContent = "Previous Week - " + data[i].timeframes.weekly.previous + "hrs"
      }
    } else {
      for (let i = 0; i < hours.length; i++) {
        const element = hours[i];
        element.textContent = data[i].timeframes.monthly.current + "hrs"
      }

      for (let i = 0; i < previous.length; i++) {
        const element = previous[i];
        element.textContent = "Previous Month - " + data[i].timeframes.monthly.previous + "hrs"
      }
    }
  })
}
