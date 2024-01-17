import ProductosPagina from './productos/ProductosPagina'





const ItemListContainer = () => {

    return (

        <article className='flex bg-slate-200'>

            <section className='flex flex-wrap gap-4 px-6 py-11'>
                <ProductosPagina />
            </section>

        </article>

    )
}













export default ItemListContainer