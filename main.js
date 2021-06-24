const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quickbrown fox jumps over the lazy dog.
abbcccdddd
hxyp
동해물과 백두산이 마르고 닳도록 하느님이
`
//생성자
//const regexp = new RegExp('the', 'gi')

// //리터럴
// const regexp = /the/gi
// console.log(str.match(regexp))

// 메소드
// const regexp = /fox/gi
// console.log(regexp.test(str)) //일치여부 불린값
// console.log(str.replace(regexp, 'AAA')) // 문자 대체
// console.log(str)

// 플래그
// const regexp = /the/gi
// console.log(str.match(regexp))
//console.log(str.match(/the/gi)) // 정규식에 리터럴값 넣어도 됨

//console.log(str.match(/\.$/gi))
//console.log(str.match(/h..p/gim)) 
console.log(str.match(/\b\w{2,3}\b/g)) //\b\b 숫자문자 구간 010- → 010
console.log(str.match(/[0-9]/g)) // 0-9사이 문자 구간 일치 배열로
console.log(str.match(/[0-9]{1,}/g)) // 0-9사이 문자 구간 1개 이상 연속 일치 배열로
console.log(str.match(/[가-힣]{1,}/g)) // 가-힣 사잉 문자구간 1개 이상 연속 일치 배열로
console.log(str.match(/\w/g))
console.log(str.match(/\bf\w{1,}\b/g)) // b(경계) f시작하는 단어, 1개이상 연속일치 b(경계) frozen, fox
console.log(str.match(/\d{1,}/g)) //숫자에 일치, 1개 이상 일치 배열로
console.log(str.match(/\s/g)) //공백 일치, 1개 이상 일치 배열로

const h = `the hello  world   !
`
console.log(h.match(/\s/g)) //공백 일치, 1개 이상 일치 배열로
console.log(h.replace(/\s/g, '')) //공백을 ''로 삭제된것처럼 theheloworld!


// 앞쪽 일치, 뒤쪽 일치
//임이의 문자.{1,} 1개 이상 일치 (?=@) @앞쪽 일치
console.log(str.match(/.{1,}(?=@)/g)) //  = thesecon


//임이의 문자.{1,} 1개 이상 일치 (?<=@) @뒤쪽 일치
console.log(str.match(/(?<=@).{1,}/g)) // gmail.com