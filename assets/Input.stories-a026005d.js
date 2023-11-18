import{j as r,a as e,F as a,T as h}from"./index-85695562.js";import{d as s,e as $}from"./index.esm-e165c97b.js";import{T as j}from"./index-8d451097.js";import{T as l}from"./text-75d279b9.js";import{r as B}from"./index-76fb7be0.js";import"./iconBase-1d38e9b4.js";import"./_commonjsHelpers-de833af9.js";const t=({id:i=B.useId(),label:g,type:_="text",variant:q="default",description:O,name:D,placeholder:k,disabled:L=!1,leftSection:n,rightSection:o})=>{const b={danger:{input:"bg-red-50 focus:bg-white border-red-300 focus:border-red-400 focus:ring-red-100",description:"text-red-500"},default:{input:"border-gray-300 focus:bg-white hover:border-gray-900 focus:border-gray-400 focus:ring-gray-300",description:"text-zinc-500"},success:{input:"bg-green-50 focus:bg-white border-green-300 hover:border-green-900 focus:border-green-400 focus:ring-green-100",description:"text-green-500"},warning:{input:"bg-orange-50 focus:bg-white border-orange-300 hover:border-orange-900 focus:border-orange-400 focus:ring-orange-100",description:"text-orange-500"}}[q],Q=`transition duration-200 placeholder:text-gray-400 
                        shadow
                        rounded-lg
                        focus:ring-4
                        text-gray-900 
                        py-2.5 px-3.5
                        w-80 max-w-full
                        disabled:bg-neutral-100
                        disabled:cursor-not-allowed
                        ${b.input}
                        ${n?"pl-14":""}
                        ${o?"pr-14":""}
                        `;return r("div",{className:"input-group mb-3",children:[g&&e("div",{className:"bootwind-label mb-2",children:e("label",{className:"text-neutral-600 leading-tight font-medium",htmlFor:i,children:g})}),r("div",{className:`input-area relative inline-block ${n?"has-left-section":""} ${o?"has-right-section":""}`,children:[n&&e("label",{htmlFor:i,className:"input-left-section absolute items-center left-0 top-0 flex justify-center h-full w-14",children:n}),e("input",{type:_,placeholder:k,id:i,name:D,className:Q,disabled:L}),o&&e("label",{htmlFor:i,className:"input-right-section absolute items-center right-0 top-0 flex justify-center h-full w-14",children:o})]}),e("span",{className:`${b.description} flex gap-2 items-center text-sm mt-2`,children:O})]})};try{input.displayName="input",input.__docgenInfo={description:"",displayName:"input",props:{id:{defaultValue:{value:"useId()"},description:"",name:"id",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"danger"'},{value:'"warning"'},{value:'"success"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},leftSection:{defaultValue:null,description:"",name:"leftSection",required:!1,type:{name:"ReactNode"}},rightSection:{defaultValue:null,description:"",name:"rightSection",required:!1,type:{name:"ReactNode"}}}}}catch{}const U={title:"Components/Forms/Input",component:j,argTypes:{enabled:{control:"boolean"}}},d=i=>r(a,{children:[e(h,{title:"Forms",description:"Forms"}),e(l,{type:"headline",size:6,children:"Basic Input"}),e(t,{placeholder:"ari@bootwind.com"}),e(t,{placeholder:"Disabled input",disabled:!0})]}),c=i=>r(a,{children:[e(h,{title:"Forms",description:"Forms"}),r("div",{className:"mb-10",children:[e(l,{type:"headline",size:6,children:"Input with Label"}),e(t,{placeholder:"ari@bootwind.com",label:"Email"})]}),r("div",{className:"mb-10",children:[e(l,{type:"headline",size:6,children:"Input with Description"}),e(t,{placeholder:"ari@bootwind.com",label:"Email",description:r(a,{children:[e(s,{className:"w-4 h-4"}),"Helping text for user"]})})]})]}),f=e(a,{children:e("div",{className:"p-1 border rounded-md",children:r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"12",viewBox:"0 0 20 12",fill:"none",children:[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.65265 10.0245C8.64273 10.8562 7.33269 11.3583 5.90117 11.3583C2.70702 11.3583 0.117645 8.85857 0.117645 5.77498C0.117645 2.69139 2.70702 0.19165 5.90117 0.19165C7.33269 0.19165 8.64273 0.693732 9.65265 1.52544C10.6626 0.693732 11.9726 0.19165 13.4041 0.19165C16.5983 0.19165 19.1877 2.69139 19.1877 5.77498C19.1877 8.85857 16.5983 11.3583 13.4041 11.3583C11.9726 11.3583 10.6626 10.8562 9.65265 10.0245Z",fill:"#ED0006"}),e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.65265 10.0245C10.8962 9.00045 11.6847 7.47661 11.6847 5.77498C11.6847 4.07335 10.8962 2.54952 9.65265 1.52543C10.6626 0.693731 11.9726 0.19165 13.4041 0.19165C16.5983 0.19165 19.1877 2.69139 19.1877 5.77498C19.1877 8.85857 16.5983 11.3583 13.4041 11.3583C11.9726 11.3583 10.6626 10.8562 9.65265 10.0245Z",fill:"#F9A000"}),e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.65266 10.0245C10.8962 9.00043 11.6847 7.4766 11.6847 5.77498C11.6847 4.07336 10.8962 2.54954 9.65266 1.52545C8.40914 2.54954 7.62064 4.07336 7.62064 5.77498C7.62064 7.4766 8.40914 9.00043 9.65266 10.0245Z",fill:"#FF5E00"})]})})}),p=i=>r(a,{children:[e(h,{title:"Forms",description:"Forms"}),e("div",{className:"mb-10",children:e(t,{placeholder:"1234 1234 1234 1234",label:"Card Number",leftSection:f})}),e("div",{className:"mb-10",children:e(t,{placeholder:"1234 1234 1234 1234",label:"Card Number",leftSection:f,rightSection:e(a,{children:e($,{})})})})]}),u=i=>r(a,{children:[e(h,{title:"Forms",description:"Forms"}),r("div",{className:"mb-10",children:[e(l,{type:"paragraph",size:2,children:"Default"}),e(t,{placeholder:"ari@bootwind.com",label:"Email",description:r(a,{children:[e(s,{className:"w-4 h-4"}),"Helping text for user"]})})]}),r("div",{className:"mb-10",children:[e(l,{type:"paragraph",size:2,children:"Danger"}),e(t,{variant:"danger",placeholder:"ari@bootwind.com",label:"Email",description:r(a,{children:[e(s,{className:"w-4 h-4"}),"Helping text for user"]})})]}),r("div",{className:"mb-10",children:[e(l,{type:"paragraph",size:2,children:"Warning"}),e(t,{variant:"warning",placeholder:"ari@bootwind.com",label:"Email",description:r(a,{children:[e(s,{className:"w-4 h-4"}),"Helping text for user"]})})]}),r("div",{className:"mb-10",children:[e(l,{type:"paragraph",size:2,children:"Success"}),e(t,{variant:"success",placeholder:"ari@bootwind.com",label:"Email",description:r(a,{children:[e(s,{className:"w-4 h-4"}),"Helping text for user"]})})]})]}),m=i=>e(a,{});var v,w,x;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`(args: ToggleProps) => <>

    <Title title="Forms" description="Forms" />

    <Text type='headline' size={6}>Basic Input</Text>
    <Input placeholder='ari@bootwind.com'></Input>
    <Input placeholder='Disabled input' disabled></Input>
  </>`,...(x=(w=d.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var N,y,C;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`(args: ToggleProps) => <>

    <Title title="Forms" description="Forms" />

    <div className="mb-10">
      <Text type='headline' size={6}>Input with Label</Text>
      <Input placeholder='ari@bootwind.com' label='Email'></Input>
    </div>
    <div className="mb-10">
      <Text type='headline' size={6}>Input with Description</Text>
      <Input placeholder='ari@bootwind.com' label='Email' description={<>
          <HiOutlineQuestionMarkCircle className='w-4 h-4' />
          Helping text for user
        </>}></Input>
    </div>
  </>`,...(C=(y=c.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var I,T,F;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`(args: ToggleProps) => <>

    <Title title="Forms" description="Forms" />

    <div className="mb-10">
      <Input placeholder='1234 1234 1234 1234' label='Card Number' leftSection={masterCardImage} />
    </div>
    <div className="mb-10">
      <Input placeholder='1234 1234 1234 1234' label='Card Number' leftSection={masterCardImage} rightSection={<>
          <HiOutlineCreditCard></HiOutlineCreditCard>
        </>} />
    </div>
  </>`,...(F=(T=p.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var H,E,z;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`(args: ToggleProps) => <>

    <Title title="Forms" description="Forms" />

    <div className="mb-10">
      <Text type='paragraph' size={2}>Default</Text>
      <Input placeholder='ari@bootwind.com' label='Email' description={<>
          <HiOutlineQuestionMarkCircle className='w-4 h-4' />
          Helping text for user
        </>}></Input>
    </div>
    <div className="mb-10">
      <Text type='paragraph' size={2}>Danger</Text>
      <Input variant='danger' placeholder='ari@bootwind.com' label='Email' description={<>
          <HiOutlineQuestionMarkCircle className='w-4 h-4' />
          Helping text for user
        </>}></Input>
    </div>
    <div className="mb-10">
      <Text type='paragraph' size={2}>Warning</Text>
      <Input variant='warning' placeholder='ari@bootwind.com' label='Email' description={<>
          <HiOutlineQuestionMarkCircle className='w-4 h-4' />
          Helping text for user
        </>}></Input>
    </div>
    <div className="mb-10">
      <Text type='paragraph' size={2}>Success</Text>
      <Input variant='success' placeholder='ari@bootwind.com' label='Email' description={<>
          <HiOutlineQuestionMarkCircle className='w-4 h-4' />
          Helping text for user
        </>}></Input>
    </div>
  </>`,...(z=(E=u.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var S,V,M;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`(args: ToggleProps) => <>
  </>`,...(M=(V=m.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};const X=["BasicInput","LabelAndHelperText","LeftRightSections","Variants","InputGroup"];export{d as BasicInput,m as InputGroup,c as LabelAndHelperText,p as LeftRightSections,u as Variants,X as __namedExportsOrder,U as default};
//# sourceMappingURL=Input.stories-a026005d.js.map
