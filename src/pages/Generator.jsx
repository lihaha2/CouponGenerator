import {useState} from 'react'

const Generator = ()=>{
    document.title = 'Генератор купонов'

    const [title, setTitle] = useState({
        title: 'Беды с башкой',
        count: '1',
        time: '2'
    })

    const times = new Map([
        [0, ''],
        [1, 'в день'],
        [2, 'в неделю'],
        [3, 'в месяц'],
        [4, 'в год/лет']
    ])

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

    const CreateLink = ()=> {
        (title.title !== '') && (title.count !== '') && (title.time !== '') 
            ? setlink(`https://couponsgenerator.netlify.app/Coupon?id=783216742&title=${title.title.split(' ').join('_')}&count=${title.count}&time=${title.time}`)
            : alert('Заполните все поля')
    }
    const Copy = () => navigator.clipboard.writeText(link).then(()=> alert('Ссылка скопирована'))

    return(
        <>
            <div className="cupon__wrapper">
                <div className="cupon">
                    <span className="cupon__title">КУПОН НА {title.title.toUpperCase()}</span>
                    <span className="cupon__badge">ДЕЙСТВУЕТ {title.count.toUpperCase()} РАЗ(А) {times.get(parseInt(parseInt(title.time))).toUpperCase()}</span>
                </div>
            </div>
            <div className="err">
                <input type="text" value={title.title} onChange={TitleHandler} placeholder="Название купона" />
                <input type="text" value={title.count} onChange={CountHandler} placeholder="Число раз" maxLength={5} />
                <select name="time" defaultValue={title.time} onChange={SelectHandler}>
                    <option value="0">один раз</option>
                    <option value="1">день</option>
                    <option value="2">неделю</option>
                    <option value="3">месяц</option>
                    <option value="4">год/лет</option>
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