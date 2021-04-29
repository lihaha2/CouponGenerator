const Coupon = ()=>{
    document.title = 'Купон'
    let attributes = []
    window.location.search !== '' ? 
        decodeURI(window.location.search).split('&').forEach(e=> attributes.push(e.split('=')[1].toUpperCase()))
    :   console.log('Купон не найден :(')
    
    return(
        <>
        {
            window.location.search === '' ?
                <div className="err" style={{maxWidth:'max-content'}}>
                    <span style={{margin: '0 0 15px 0'}}>Купон не найден :(</span>
                    <a href="/">Хотите сгенерировать купон?</a>
                </div>
            :
                <div className="cupon__wrapper">
                    <div className="cupon">
                        <span className="cupon__title">КУПОН НА {attributes[1]}</span>
                        <span className="cupon__badge">ДЕЙСТВУЕТ {attributes[2]} РАЗ {attributes[3]}</span>
                    </div>
                </div>
        }
        </>
    )
    
}

export default Coupon