import React from 'react'

import { connect } from 'react-redux'
import { RootState } from '../../redux/root-reducer'
import { Section } from '../../redux/directory/types'

import { createStructuredSelector } from 'reselect'
import { selectDirectorySelctions } from '../../redux/directory/selectors'

import MenuItem from '../menu-item'

import './styles.scss'

interface Props {
  sections: Array<Section>
}

const Directory: React.FC<Props> = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector<RootState, Props>({
  sections: selectDirectorySelctions
})

export default connect(mapStateToProps)(Directory)
