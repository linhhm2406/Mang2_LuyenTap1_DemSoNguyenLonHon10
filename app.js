let array = [];
let count_quantity = 0;
let count_bigger_than_10 = 0;
let bigger_than_10=[];

while (count_quantity < 10) {
    for (let i = 0; i < 10; i++) {
        array[i] = parseInt(prompt('Nhap vao so nguyen ' + (i + 1)));
        if (array[i] > 10) {
            count_bigger_than_10 += 1;
            bigger_than_10.push(array[i]);
        }
        count_quantity++;
    }
}
alert('Co ' + count_bigger_than_10 + ' so lon hon 10. La '+bigger_than_10);