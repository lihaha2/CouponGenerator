import {useState} from 'react'

const Generator = ()=>{
    document.title = 'Генератор купонов'
    const [title, setTitle] = useState({
        title: 'Беду с башкой',
        count: '1',
        time: 'в день'
    })

    const [link, setlink] = useState('')

    const TitleHandler = e =>{
        setTitle({
            ...title,
            title: e.target.value
        })
    }
    
    const SelectHandler = e =>{
        setTitle({
            ...title,
            time: e.target.value
        })
    }
    
    const CountHandler = e =>{
        if (!isNaN(parseInt(e.target.value))) {
            setTitle({
                ...title,
                count: parseInt(e.target.value) + ''
            })
        }else if(e.target.value === ''){
            setTitle({
                ...title,
                count: e.target.value + ''
            })
        }
        else return false
        
    }

    const CreateLink = ()=> setlink(`https://couponsgenerator.netlify.app/Coupon?id=783216742&title=${title.title}&count=${title.count}&time=${title.time}`)
    
    const Copy = ()=> navigator.clipboard.writeText(link).then(()=> alert('Ссылка скопирована'))

    return(
        <>
            <div className="cupon__wrapper">
                <div className="cupon">
                    <span className="cupon__title">КУПОН НА {title.title.toUpperCase()}</span>
                    <span className="cupon__badge">ДЕЙСТВУЕТ {title.count.toUpperCase()} РАЗ(А) {title.time.toUpperCase()}</span>
                </div>
            </div>
            <div className="err">
                <input type="text" value={title.title} onChange={TitleHandler} placeholder="Название купона" />
                <input type="text" value={title.count} onChange={CountHandler} placeholder="Число раз" maxLength={5} />
                <select name="time" defaultValue={title.time} onChange={SelectHandler}>
                    <option value="">один раз</option>
                    <option value="в день">день</option>
                    <option value="в неделю">неделю</option>
                    <option value="в месяц">месяц</option>
                    <option value="в год/лет">год/лет</option>
                </select>
                <button onClick={CreateLink}>сгенерировать купон</button>
                <div className="result" style={link !== '' ? {display: 'flex'} : {display: 'none'}}>
                    <a target="__blank" href={link} id="resultLink">{link}</a>
                    <button onClick={Copy}>копировать</button>
                </div>
                
            </div>
        </>
    )
}

export default Generator