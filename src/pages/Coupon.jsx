const Coupon = ()=>{
    document.title = 'Купон'

    let attributes = []

    const times = new Map([
        [0, ''],
        [1, 'в день'],
        [2, 'в неделю'],
        [3, 'в месяц'],
        [4, 'в год/лет']
    ])

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
                        <span className="cupon__title">КУПОН НА {attributes[1].split('_').join(' ')}</span>
                        <span className="cupon__badge">ДЕЙСТВУЕТ {attributes[2]} РАЗ {times.get(parseInt(attributes[3])).toUpperCase()}</span>
                    </div>
                </div>
        }
        </>
    )
    
}

export default Coupon