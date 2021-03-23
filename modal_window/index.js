const fruits =[
    {id: 1, title: 'Яблоки', price: 20, img: 'https://f.vividscreen.info/soft/d3308e332baf787700ec74e2fe310f4d/Darth-Vader-1024x1024.jpg'},
    {id: 1, title: 'Апельсины', price: 30, img: 'https://f.vividscreen.info/soft/d3308e332baf787700ec74e2fe310f4d/Darth-Vader-1024x1024.jpg'},
    {id: 1, title: 'Манго', price: 40, img: 'https://f.vividscreen.info/soft/d3308e332baf787700ec74e2fe310f4d/Darth-Vader-1024x1024.jpg'}

]

const modal = $.modal({
    title: `It's just a modal window`,
    closable: true,
    content: `<p>Lorem ipsum dolor sit.</p><p>Lorem ipsum dolor sit.</p>`,
    width:'400px',
    footerButtons: [
        {text: 'Ok', type: 'primary', handler(){
            console.log('Primary btn clicked')
        }},
        {text: 'Cancel', type: 'danger', handler(){
            console.log('Danger btn clicked')
            modal.close()
        }}
    ]
})