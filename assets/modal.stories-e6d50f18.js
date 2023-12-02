import{j as a,a as i,F as x}from"./jsx-runtime-29545a09.js";import{r as s}from"./index-76fb7be0.js";import{B as g}from"./button-c1adf9cd.js";import{c as n}from"./cn-a0481221.js";import{r as I}from"./index-d3ea75b5.js";import{T as B}from"./typography-80cc7c27.js";import"./_commonjsHelpers-de833af9.js";const v=s.createContext({isOpen:!1});function d({children:e}){const[o,t]=s.useState(!1),C=()=>t(!0),O=()=>t(!1),[b,S]=s.useState();return a(v.Provider,{value:{closeModal:O,openModal:C,isOpen:o,modal:b},children:e})}const q=()=>s.useContext(v);try{d.displayName="ModalProvider",d.__docgenInfo={description:"",displayName:"ModalProvider",props:{}}}catch{}function r(e){return a(d,{children:e.children})}try{r.displayName="Modal",r.__docgenInfo={description:"",displayName:"Modal",props:{}}}catch{}const c=e=>{const o=q();return a("div",{className:"modal-trigger",onClick:()=>o.openModal(),children:e.children})};try{c.displayName="ModalTrigger",c.__docgenInfo={description:"",displayName:"ModalTrigger",props:{}}}catch{}const m=e=>a("div",{className:"modal-backdrop fixed inset-0 bg-gray-800/90 z-[99]",onClick:e.onClick});try{m.displayName="ModalBackdrop",m.__docgenInfo={description:"",displayName:"ModalBackdrop",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const p=({isOpen:e=!1,...o})=>{const t=q();return s.useEffect(()=>{e?t.openModal():t.closeModal()},[e]),s.useEffect(()=>{t.isOpen&&o.onModalOpen?o.onModalOpen():!t.isOpen&&o.onModalClose&&o.onModalClose()},[t.isOpen]),I.createPortal(i("div",{className:n("fixed inset-0 transition duration-200 px-5 pb-5 overflow-auto [&:not(.show)]:opacity-0 [&:is(.show)]:opacity-100 [&:not(.show)]:invisible [&:is(.show)]:visible [&:is(.show)]:transition [&:is(.show)_.modal]:top-24 ",e?"show":""),children:[a("div",{className:"relative",children:a("div",{className:"modal z-[100] top-20 bg-white absolute max-w-[600px] w-full left-1/2 -translate-x-1/2 rounded-md",children:o.children})}),a(m,{onClick:()=>t.closeModal()})]}),document.body)};try{p.displayName="ModalContent",p.__docgenInfo={description:"",displayName:"ModalContent",props:{isOpen:{defaultValue:{value:"false"},description:"",name:"isOpen",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onModalOpen:{defaultValue:null,description:"",name:"onModalOpen",required:!1,type:{name:"(() => void)"}},onModalClose:{defaultValue:null,description:"",name:"onModalClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const u=e=>a("div",{className:n("modal-header | p-5 pb-0",e.className),children:e.children});try{u.displayName="ModalHeader",u.__docgenInfo={description:"",displayName:"ModalHeader",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const _=e=>a(B,{className:n("modal-title",e.className),children:e.children});try{_.displayName="ModalTitle",_.__docgenInfo={description:"",displayName:"ModalTitle",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const M=e=>a("div",{className:"modal-body p-5 pt-0",children:e.children});try{M.displayName="ModalBody",M.__docgenInfo={description:"",displayName:"ModalBody",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const f=e=>a("div",{className:n("modal-footer p-5 pt-0",e.className),children:e.children});try{f.displayName="ModalFooter",f.__docgenInfo={description:"",displayName:"ModalFooter",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const H={title:"Components/Modal",component:r,tags:["autodocs"]},l=()=>{const[e,o]=s.useState(!1);return a(x,{children:a("div",{className:"test",children:i(r,{children:[a(c,{children:a(g,{children:"Open Modal"})}),i(p,{isOpen:e,onModalOpen:()=>o(!0),onModalClose:()=>o(!1),children:[a(u,{children:a(_,{children:"Sign In"})}),i(M,{children:[a("p",{className:"mb-5",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe mollitia a, molestiae soluta cupiditate consequuntur ullam voluptates, commodi magnam unde amet similique quae! Nostrum ducimus veniam sed labore praesentium molestias."}),a("p",{className:"mb-5",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe mollitia a, molestiae soluta cupiditate consequuntur ullam voluptates, commodi magnam unde amet similique quae! Nostrum ducimus veniam sed labore praesentium molestias."}),a("p",{className:"mb-5",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe mollitia a, molestiae soluta cupiditate consequuntur ullam voluptates, commodi magnam unde amet similique quae! Nostrum ducimus veniam sed labore praesentium molestias."})]}),a(f,{children:a(g,{onClick:()=>o(!1),children:"Close"})})]})]})})})};var y,N,h;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>
            <div className="test">
                <Modal>
                    <ModalTrigger>
                        <Button>Open Modal</Button>
                    </ModalTrigger>
                    <ModalContent isOpen={isOpen} onModalOpen={() => setIsOpen(true)} onModalClose={() => setIsOpen(false)}>
                        <ModalHeader>
                            <ModalTitle>Sign In</ModalTitle>
                        </ModalHeader>
                        <ModalBody>
                            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe mollitia a, molestiae soluta cupiditate consequuntur ullam voluptates, commodi magnam unde amet similique quae! Nostrum ducimus veniam sed labore praesentium molestias.</p>
                            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe mollitia a, molestiae soluta cupiditate consequuntur ullam voluptates, commodi magnam unde amet similique quae! Nostrum ducimus veniam sed labore praesentium molestias.</p>
                            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe mollitia a, molestiae soluta cupiditate consequuntur ullam voluptates, commodi magnam unde amet similique quae! Nostrum ducimus veniam sed labore praesentium molestias.</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={() => setIsOpen(false)}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </div>
        </>;
}`,...(h=(N=l.parameters)==null?void 0:N.docs)==null?void 0:h.source}}};const P=["Basic"];export{l as Basic,P as __namedExportsOrder,H as default};
//# sourceMappingURL=modal.stories-e6d50f18.js.map
