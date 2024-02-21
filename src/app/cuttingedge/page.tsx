import SectionHeader from '../components/snippets/section-header'
import styles from './page.module.css'

export default function CuttingEdge() {
  return (
    <section id='cuttingedge' className={styles.cuttingedge + ' full subgrid'}  style={{color: 'var(--primary-color)'}}>
      <div className={styles.angle}></div>
      <SectionHeader darker={true} title="Cutting-edge digital solutions for your business" subtitle="" />
    </section>
  )
}