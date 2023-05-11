import FooterLinks from '../../../../Footer/FooterLinks'
import FooterEnd from '../../../../Footer/FooterEnd'
import FooterResponsive from '../../../../Footer/FooterResponsive'
import StoreItem from './StoreItem'
import ContinueHandle from './ContinueHandle'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { nanoid } from 'nanoid'

function StoreContent({show, setShow, store, setStore}) {

    const continueHandler = () => {
        setShow(!show)
    }
    show ? disableBodyScroll(document) : enableBodyScroll(document)
    return (
        <>
            <div className='store-content'>
                <div>
                    {store.map(item => <StoreItem key={nanoid()} {...item} store={store} setStore={setStore} />)}
                </div>

                <button onClick={continueHandler} className='continue-btn'>Continue</button>
            </div>
            <div>
                <FooterResponsive />
                <div className='containerr'>
                    <FooterLinks />
                    <FooterEnd />
                </div>
            </div>
            <div  className={show? 'clicked-continue store-open': 'clicked-continue store-close'}>
                {show ? <ContinueHandle setShow={setShow} /> : null}
            </div>
            <div onClick={continueHandler} className={show ? 'modal-continue' : 'none'}></div>
         
        </>

    )
}

export default StoreContent