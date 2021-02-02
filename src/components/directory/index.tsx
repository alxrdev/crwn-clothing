import React from 'react'

import { connect } from 'react-redux'
import { RootState } from '../../redux/root-reducer'
import { Section } from '../../redux/directory/types'

import { createStructuredSelector } from 'reselect'
import { selectDirectorySelctions } from '../../redux/directory/selectors'

import MenuItem from '../menu-item'

import { DirectoryMenuContainer } from './styles'

interface Props {
  sections: Array<Section>
}

const Directory: React.FC<Props> = ({ sections }) => {
  return (
    <DirectoryMenuContainer>
      {sections.map(({ title, imageUrl, id, size, linkUrl }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
      ))}
    </DirectoryMenuContainer>
  )
}

const mapStateToProps = createStructuredSelector<RootState, Props>({
  sections: selectDirectorySelctions
})

export default connect(mapStateToProps)(Directory)
