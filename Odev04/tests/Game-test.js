const React = require('react');
const {mount} = require('enzyme');
const {Game} = require('../src/Game');


test("Çoklu deneme", () => {
    let driver = mount(<Game/>);
    for(let i = 0; i<50; i++){
        let card =driver.find('.kart').at(1);
        card.simulate('click');
        expect(src === 'img/Kopek.jpg' || src ==='img/Kedi.jpg').toBeTruthy();
        src=undefined;
//checkquizis
        driver = mount(<Game/>);
    }
});

test("Kayip", () => {
    let driver = mount(<Game/>);
    let card = driver.find('.kart').at(1);
    card.simulate('click');
    card.find("img").prop("src");
    card = driver.find('.kart').at(0);
    let src = card.find("img").prop("src")
    expect(src === 'img/Kopek.jpg');
    src=undefined;
    driver = mount(<Game/>);
});


test("Kazanma", () => {
    let driver = mount(<Game/>);
    let card = driver.find('.kart').at(1);
    card.simulate('click');
    card.find("img").prop("src");
    card = driver.find('.kart').at(0);
    let src = card.find("img").prop("src")
    expect(src === 'img/Kedi.jpg');
    src=undefined;
    driver = mount(<Game/>);
});

