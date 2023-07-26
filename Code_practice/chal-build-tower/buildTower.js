function buildTower(num){
    let tower = []
    for (i=1;i<=num;i++) {
        star_num = 2*i-1
        space_num = num-i
        var str = ' '.repeat(space_num) +'*'.repeat(star_num) + ' '.repeat(space_num)
        tower.push(str)
        console.log(str)
    }
    return tower
}
console.log(buildTower(6))