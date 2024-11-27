function handleSubmit(event){
    event.preventDefault();
    // 取得輸入資料
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // 將資料存入 sessionStorage
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('password', password);
    // console.log(username);
    // console.log(password);  
    window.location.href = 'login.html';
    
}
