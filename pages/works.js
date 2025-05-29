import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import sevaria from '../works/sevaria_eyecatch.png';
import hue from '../works/hue.png';
import omoro from '../works/msOmoro.png';
import furnituresite from '../works/home_furniture.png';
import sandsite from '../works/sandsite.png';

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Our Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="sevaria" title="Sevaria" thumbnail={sevaria}>
            A Fashion website for a Kenyan fashion designer.
          </WorkGridItem>
        </Section>
        
        <Section>
          <WorkGridItem id="hue" title="Hue" thumbnail={hue}>
            This fashion webiste for one of our clients coming soon style.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="#" title="MsOmoro" thumbnail={omoro}>
            This is a Airbnb welcome page to guide guests.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="sevaria" thumbnail={furnituresite} title="Tropical Furnitures">
            A funiture Display website.
          </WorkGridItem>
        </Section>
        {/* https://betterthansand.com/ */}
        <Section delay={0.3}>
          <WorkGridItem id="sevaria" thumbnail={sandsite} title="Better Than Sand">
            A sand bag selling site.
          </WorkGridItem>
        </Section>
        {/* https://tropicalfurnitures.com/ */}
      
      </SimpleGrid>

      {/* <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="sevaria" thumbnail={sevaria} title="Sevaria">
            A Fashion website for a Kenyan fashion designer.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="sevaria" thumbnail={sevaria} title="Sevaria">
            A Fashion website for a Kenyan fashion designer.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="sevaria" thumbnail={sevaria} title="Sevaria">
            A Fashion website for a Kenyan fashion designer.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="sevaria" thumbnail={sevaria} title="Sevaria">
            A Fashion website for a Kenyan fashion designer.
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}

      {/* <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section delay={0.4}>
          <WorkGridItem id="sevaria" thumbnail={sevaria} title="Sevaria">
            A Fashion website for a Kenyan fashion designer.
          </WorkGridItem>
        </Section>
        <Section delay={0.4}>
          <WorkGridItem id="sevaria" thumbnail={sevaria} title="Sevaria">
            A Fashion website for a Kenyan fashion designer.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="sevaria" thumbnail={sevaria} title="Sevaria">
            A Fashion website for a Kenyan fashion designer.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="sevaria" thumbnail={sevaria} title="Sevaria">
            A Fashion website for a Kenyan fashion designer.
          </WorkGridItem>
        </Section>
        
      </SimpleGrid> */}
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
