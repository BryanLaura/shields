'use strict'

const { metric } = require('../text-formatters')
const { BaseOreService, documentation, keywords } = require('./ore-base')

module.exports = class OreStars extends BaseOreService {
  static category = 'rating'

  static route = {
    base: 'ore/stars',
    pattern: ':pluginId',
  }

  static examples = [
    {
      title: 'Ore Stars',
      namedParams: {
        pluginId: 'nucleus',
      },
      staticPreview: this.render({ stars: 1000 }),
      documentation,
      keywords,
    },
  ]

  static defaultBadgeData = {
    label: 'stars',
    color: 'blue',
  }

  static render({ stars }) {
    return {
      message: metric(stars),
    }
  }

  async handle({ pluginId }) {
    const { stats } = await this.fetch({ pluginId })
    const { stars } = stats
    return this.constructor.render({ stars })
  }
}
