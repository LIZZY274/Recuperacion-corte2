import Input from '../../Input'
import perfil from '../../../../assets/perfil.jpeg'
import check from '../../../../assets/check.svg'
import galeria from '../../../../assets/galeria.svg'
import calen from '../../../../assets/calen.svg'
import noticia from '../../../../assets/new.svg'

function CreatePublic() {
  return (
    <>
    <section className='w-full h-auto bg-[#D9D9D9] p-4 flex flex-col gap-3 '>
        <div className=' flex flex-row gap-3 '>
            <div className='w-[36px] h-[36px] overflow-hidden rounded-full'> <img className='w-full h-full object-cover' src={perfil} alt="" /></div>
           <Input placeholder="Crear Publicación"/> 
          <div className='w-[36px] h-[36px] object-cover overflow-hidden rounded-full'> <img className='w-full h-full object-cover' src={check} alt="" /></div>
        </div>
        <div className='flex w-full gap-2 justify-end'>
            <button className='p-2 bg-[#C5C5C5] text-xs text-black rounded-sm flex gap-2 items-center'><img src={galeria} alt="" /> Contenido multimedia</button>
            <button className='p-2 bg-[#C5C5C5] text-xs text-black rounded-sm flex gap-2 items-center'><img src={calen} alt="" />Evento</button>
            <button className='p-2 bg-[#C5C5C5] text-xs text-black rounded-sm flex gap-2 items-center'> <img src={noticia} alt="" /> Escribir articulo</button>
        </div>
    </section>
    </>
  )
}

export default CreatePublic