import React, { ReactElement, SVGProps } from 'react'
import { pureCombo } from './ComboParser'
import { useIconContext } from './IconContext'

interface Props {
  combo: pureCombo[]
  tooltipRender?: (tooltip: any) => React.ReactElement
  imageRender?: (image: any) => React.ReactElement
}

const initialToolTipRender = (tooltip: string) => {
  return <div className='tooltip'>{tooltip}</div>
}

const initialImageRender = (
  Image: React.FC<React.SVGProps<SVGSVGElement>>,
  divProps: React.HTMLAttributes<HTMLDivElement>,
  svgProps: React.SVGProps<SVGSVGElement> = {}
) => {
  return (
    <div className='image' {...divProps}>
      <Image {...svgProps} />
    </div>
  )
}

function ComboPreview({
  combo,
  tooltipRender = initialToolTipRender,
  imageRender = initialImageRender
}: Props): React.ReactElement {
  const icons = useIconContext()
  console.log('prejako')
  return (
    <div>
      {combo.map((e) => {
        const component =
          e.type !== 'tooltip'
            ? imageRender(icons.get(e.content))
            : tooltipRender(e.content)
        return component
      })}
    </div>
  )
}

export default ComboPreview
