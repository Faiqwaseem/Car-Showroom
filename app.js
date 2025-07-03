var cars = {
    honda: {
        civic: {
            type: {
                image: "https://alfaautomotives.com/cdn/shop/files/Civic_Rebirth_2.png?v=1723476201",
                name: "Honda Civic Reborn",
                year: "2023",
                price: 10000,
                colors: ["red", "black", "white"],
                gets: 4,
                wheels: 4,
            }
        },
        city: {
            type: {
                image: "https://www.honda.com.pk/images/2021/07/Honda_City21_Car-04-1-1-750x420.jpg",
                name: "Honda City Aspire",
                year: "2022",
                price: 12000,
                colors: ["silver", "blue", "gray"],
                gets: 4,
                wheels: 4,
            }
        }
    },
    toyota: {
        corolla: {
            type: {
                image: "https://cache1.pakwheels.com/system/car_generation_pictures/5361/original/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674",
                name: "Toyota Corolla Grande",
                year: "2019",
                colors: ["red", "black", "white"],
                price: 11000,
                gets: 4,
                wheels: 4,
            }
        },
        fortuner: {
            type: {
                image: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/137767/fortuner-legender-exterior-left-front-three-quarter-5.jpeg?isig=0&q=80&q=80",
                name: "Toyota Fortuner Legender",
                year: "2021",
                colors: ["black", "white", "brown"],
                price: 35000,
                gets: 4,
                wheels: 4,
            }
        }
    },
    suzuki: {
        swift: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzBSXzURVMCfq2OrFvU8yo1ttHUGQrfLVHv1zYQMbvMMGLNYJiOOKzkDgXqezO80O6Mos&usqp=CAU",
                name: "Suzuki Swift GLX",
                year: "2021",
                colors: ["red", "black", "white"],
                price: 8700,
                gets: 4,
                wheels: 4,
            }
        },
        cultus: {
            type: {
                image: "https://cache4.pakwheels.com/system/car_generation_pictures/6014/medium/Suzuki_Cultus_-_PNG.png?1635945515",
                name: "Suzuki Cultus Vista",
                year: "2020",
                colors: ["blue", "silver", "gray"],
                price: 9500,
                gets: 4,
                wheels: 4,
            }
        }
    },
    hyundai: {
        elantra: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvvohrMwjn5IheeKGuawxN1_LnUXXU_oUuRw&s",
                name: "Hyundai Elantra GLS",
                year: "2015",
                colors: ["red", "black", "white"],
                price: 13500,
                gets: 4,
                wheels: 4,
            }
        },
        tucson: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn-sfK_OVUtyBIYeCAfkY5RSp0L_aUSQl3vQ&s",
                name: "Hyundai Tucson Elite",
                year: "2018",
                colors: ["black", "white", "blue"],
                price: 22000,
                gets: 4,
                wheels: 4,
            }
        }
    },
    kia: {
        sportage: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRihd-gsQJrm10uIWY7d9XAdGAchjETDCQ5Dw&s",
                name: "Kia Sportage LX",
                year: "2017",
                colors: ["white", "black", "red"],
                price: 18000,
                gets: 4,
                wheels: 4,
            }
        }
    },
    mg: {
        hs: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGbCkBtJ-bUz6h6xBVYJPBYsyiCbemeXQ2KA&s",
                name: "MG HS Luxury",
                year: "2020",
                colors: ["red", "blue", "white"],
                price: 25000,
                gets: 4,
                wheels: 4,
            }
        }
    },
    audi: {
        a4: {
            type: {
                image: "https://pictures.dealer.com/a/audiontarioaoa/0345/775dc2584e8db1fff9e5bb3e3f84d4a2x.jpg",
                name: "Audi A4 Premium",
                year: "2019",
                colors: ["black", "gray", "blue"],
                price: 42000,
                gets: 4,
                wheels: 4,
            }
        }
    },
    bmw: {
        x1: {
            type: {
                image: "https://www.greenncap.com/wp-content/uploads/bmw-x1-2023-0125.png",
                name: "BMW X1 sDrive",
                year: "2021",
                colors: ["white", "black", "silver"],
                price: 38000,
                gets: 4,
                wheels: 4,
            }
        }
    },
    mercedes: {
        c200: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gjTa8U44OVAYR5b4_Xa7mptG1xGohx_4bg&s",
                name: "Mercedes C200 Avantgarde",
                year: "2018",
                colors: ["black", "white", "silver"],
                price: 45000,
                gets: 4,
                wheels: 4,
            }
        }
    },
    nissan: {
        sunny: {
            type: {
                image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Nissan/Nissan-Sunny-2011-2013/3019/1562831808002/front-left-side-47.jpg",
                name: "Nissan Sunny XL",
                year: "2016",
                colors: ["white", "black", "silver"],
                price: 10000,
                gets: 4,
                wheels: 4,
            }
        }
    },
    ford: {
        ranger: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAEO7W6UKtewVCnidG9yfpnq4j0EXYUKwF0A&s",
                name: "Ford Ranger XLT",
                year: "2022",
                price: 28000,
                colors: ["blue", "black", "silver"],
                gets: 4,
                wheels: 4,
            }
        }
    },
    volkswagen: {
        golf: {
            type: {
                image: "https://www.griffinsautorepair.com/wp-content/uploads/2020/07/2016-Volkswagen-Golf-GTI-Clubsport-001-1080-1024x576.jpg",
                name: "Volkswagen Golf GTI",
                year: "2020",
                price: 32000,
                colors: ["red", "white", "gray"],
                gets: 4,
                wheels: 4,
            }
        }
    },
    mitsubishi: {
        outlander: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5YNaM1W0HyhCX9d4fahUEMSY_M1CK_mKRlw&s",
                name: "Mitsubishi Outlander Sport",
                year: "2019",
                price: 19000,
                colors: ["black", "white", "red"],
                gets: 4,
                wheels: 4,
            }
        }
    },
    lexus: {
        rx350: {
            type: {
                image: "https://www.lexus.com.my/content/dam/lexus-v3-malaysia/model/suv/rx-2023/rx350/lexus-rx-350-overview-mgp-new.jpg",
                name: "Lexus RX 350 Luxury",
                year: "2021",
                price: 48000,
                colors: ["black", "white", "silver"],
                gets: 4,
                wheels: 4,
            }
        }
    },
    chevrolet: {
        cruze: {
            type: {
                image: "https://images.hgmsites.net/med/2016-chevrolet-cruze-4-door-sedan-auto-lt-angular-front-exterior-view_100576434_m.jpg",
                name: "Chevrolet Cruze LT",
                year: "2018",
                price: 15000,
                colors: ["red", "black", "blue"],
                gets: 4,
                wheels: 4,
            }
        }
    }
};

function ShowAllCards() {
    var company = document.getElementById("company");
    var brand = document.getElementById("brand")

    var allCards = document.getElementById("allCards")

    company.innerHTML = `<option>Select company</option>`

    for (var key in cars) {
        company.innerHTML += `
    <option value="${key}">${key.toUpperCase()}</option>`

        for (var key1 in cars[key]) {
            // console.log(key1)
            for (var key2 in cars[key][key1]) {
                // console.log(cars[key][key1][key2]);
                var carData = cars[key][key1][key2];
                var colroDiv = "";
                for (var i = 0; i < carData.colors.length; i++) {

                    colroDiv += `<div class="m-2" style= "border: 1px solid; width: 20px; height: 20px; border-radius: 10px; background-color:${carData.colors[i]};"></div>`
                }
                // console.log(colroDiv);
                allCards.innerHTML += `
                    <div class="col-12 col-sm-4 col-md-6 col-lg-4 mb-4">
  <div class="card myCard">
    <img id="cardImage" src="${carData.image}" class="card-img-top" alt="Car Image">
    <div class="card-body">
      <h5 class="card-title">${carData.name || "Unknown"}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${carData.year}</h6>
      <h2 class="text-primary">Rs: $${carData.price}</h2>
    </div>
    <div class="d-flex">
    ${colroDiv}
    </div>
  </div>
</div>
`
            }
        }
    }
}
ShowAllCards()

function onCompanyChange() {
    brand.innerHTML = "";
    brand.innerHTML = `<option>Select Brand</option>`
    for (var key in cars[company.value]) {
        brand.innerHTML += `
                <option value="${key}">${key.toUpperCase()}</option>`
    }
}



function filterCars() {
    var carData = cars[company.value][brand.value].type;
    var colroDiv = "";
    for (var i = 0; i < carData.colors.length; i++) {

        colroDiv += `<div class="m-2" style= "border: 1px solid black; width: 20px; height: 20px; border-radius: 10px; background-color:${carData.colors[i]};"></div>`
    }
    allCards.innerHTML = `
                    <div class="col-12 col-sm-6 col-md-6 col-lg-6 mb-4">
  <div class="card myCard h-100">
    <img id="cardImage" src="${carData.image}" class="card-img-top" alt="Car Image">
    <div class="card-body">
      <h5 class="card-title">${carData.name || "Unknown"}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${carData.year}</h6>
      <h2 class="text-primary">Rs: $${carData.price}</h2>
    </div>
     <div class="d-flex">
    ${colroDiv}
    </div>
  </div>
</div>
`
}

function ClearFiltter() {
    allCards.innerHTML = "";
    document.getElementById("company").value = "";
    document.getElementById("brand").innerHTML = `<option value="">Select Brand</option>`;
    ShowAllCards();
}